import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TelegramEmbed from 'react-telegram-embed';
import './Telegram.scss';


const Telegram = () => {

    return (
            <>
                    <iframe id="preview" title="TestTelegram" src="https://xn--r1a.website/s/BuntePostsChannel2"></iframe>
                    {/* <TelegramEmbed src="https://t.me/BuntePostsChannel/4" /> */}
            </>
    )
}


export default Telegram;