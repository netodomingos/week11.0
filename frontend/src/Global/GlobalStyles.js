import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }

    body {
        background-color: #f0f0f5;
        font: 400 14px Roboto, sans-serif;
    }

    html, input, button, textarea {
        font: 400 18px Roboto, sans-serif;
    }

    button{
        cursor: pointer;
    }

    form input {
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
        resize: none;
    }

    form textarea {
        width: 100%;
        min-height:  140px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px;
        margin-top: 10px;
    }

    form button {
        width: 100%;
        height: 60px;
        background-color: #e02041;
        border: 0;
        border-radius: 8px;
        font-weight: bold;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        color: #FFF;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(90%);
        }
    }

    form a{

            svg{
                margin-right: 8px;
            }

            display: flex;
            align-items: center;
            margin-top: 40px;
            color: #41414d;
            font-size: 18px;
            text-decoration: none;
            font-weight: bold;
            transition: opacity 0.2s;

            &:hover{
                opacity: 0.8;
            }
}

`