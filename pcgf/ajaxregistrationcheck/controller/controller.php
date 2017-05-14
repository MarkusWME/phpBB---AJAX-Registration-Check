<?php

/**
 * @author    MarkusWME <markuswme@pcgamingfreaks.at>
 * @copyright 2017 MarkusWME
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU General Public License v2
 */

namespace pcgf\ajaxregistrationcheck\controller;

use phpbb\db\driver\factory;
use phpbb\json_response;
use phpbb\request\request;
use phpbb\user;

/** @version 1.0.0 */
class controller
{
    protected $request;

    protected $db;

    protected $user;

    public function __construct(request $request, factory $db, user $user)
    {
        $this->request = $request;
        $this->db = $db;
        $this->user = $user;
    }

    public function check($type)
    {
        // Load extension language data
        $this->user->add_lang_ext('pcgf/ajaxregistrationcheck', array('ajaxregistrationcheck'));
        $response = new json_response();
        $response_text = array('INVALID QUERY', $this->user->lang('PCGF_AJAXREGISTRATIONCHECK_INVALID_QUERY'));
        if ($this->request->is_ajax())
        {
            switch ($type)
            {
                case 'username':
                    $username = $this->request->variable('search', '');
                    if ($username !== '')
                    {
                        $username = $this->db->sql_escape($username);
                        // Check if the name is already used
                        $query = 'SELECT username
                                    FROM ' . USERS_TABLE . '
                                    WHERE username = ' . $username;
                        $result = $this->db->sql_query($query);
                        if ($this->db->sql_fetchrow($result) == null)
                        {
                            $response_text[0] = 'NOT OK';
                            $response_text[1] = $this->user->lang('USERNAME_TAKEN_USERNAME');
                        }
                        $this->db->sql_freeresult($result);
                        // All checks passed - set status to OK
                        $response_text[0] = 'OK';
                        $response_text[1] = $this->user->lang('PCGF_AJAXREGISTRATIONCHECK_USERNAME_OK');
                    }
                break;
            }
        }
        $response->send($response_text);
    }
}
