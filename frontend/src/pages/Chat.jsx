import { useState, useEffect, memo } from "react";

import Field from '../components/UI/Field';
import Tabs from "../components/UI/Tabs";
import Button from "../components/UI/Button";
import Message from "../components/UI/Message";

import { sortMembers } from '../helpers/sortMembers';

import { getConversation, createConversation } from '../rests/index';

const Chat = ({ users, accessUser }) => {
    const [themeCheck, setThemeCheck] = useState(false);
    const [themeId, setThemeId] = useState();
    const [userToSend, setUserToSend] = useState(accessUser);
    const [valueToUser, setValueToUser] = useState('');
    const [conversations, setConversations] = useState([]);
    const [flag, setFlag] = useState(false);

    const [themeMessage, setThemeMessage] = useState('');
    const [message, setMessage] = useState('');

    const members = `${accessUser.id},${userToSend.id}`;
    const findMembers = conversations.filter(it => sortMembers(it.members) === sortMembers(members));

    useEffect(() => {
        getMessages();
    }, [flag]);

    const getMessages = async () => {
        const conversation = await getConversation();
        setConversations(conversation.data);
    }

    const sendMessage =  () => {
        setFlag(!flag);
        if (!message) {
            return;
        }

        createConversation({ members, theme: themeMessage, messages: message });
        setThemeMessage('');
        setMessage('');
        getMessages();
    }

    const setValueUser = (user) => {
        setUserToSend(user);
        setValueToUser(user.name);
    }

    const setTheme = (id) => {
        setThemeId(id);
        setThemeCheck(!themeCheck);
    }

    return (
        <div>
            <Field fieldName={'Form'} className={"input is-static"} defaultValue={accessUser.name} />

            <Field fieldName={'To'} className={"field is-horizontal"} value={valueToUser} onChange={(e) => setValueToUser(e.target.value)} placeholder="Отправить кому?" />

            <Tabs>
                {
                    [...users]
                        .filter(it => it.name.includes(valueToUser))
                        .map(user => (
                            <li key={user.id} >
                                <Button 
                                    className={userToSend.name === user.name 
                                        ? "button is-success is-link" 
                                        : "button is-link is-link is-inverted"
                                    } 
                                    onClick={() => setValueUser(user)}
                                >
                                    {user.name}
                                </Button>
                            </li>
                        ))
                }
            </Tabs>

            <div className="is-flex is-flex-direction-column pt-6 pb-6 box has-background-white-bis">
                {
                    findMembers.map(it => 
                        <Message key={it.id} theme={it.theme} onClick={() => setTheme(it.id)} >
                            {
                                themeId === it.id && themeCheck
                                    ? <div className="message-body">
                                        {it.messages}
                                      </div>
                                    : null
                            }
                        </Message> 
                    )
                }
                
            </div>

            <Field className={"field"} placeholder="Тема" value={themeMessage} onChange={(e) => setThemeMessage(e.target.value)}/>

            <input className="textarea" type='text' value={message} placeholder="Add a message..." onChange={(e) => setMessage(e.target.value)} />

            <Button className="button mt-5 is-fullwidth is-info is-outlined" onClick={() => sendMessage()}>Submit</Button>

        </div>
    )
}

export default memo(Chat);