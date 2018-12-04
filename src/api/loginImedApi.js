import { parseString } from 'xml2js';
import { ERROR } from './../constants/answerTypes'; 
import { SYSTEM_NAME } from './../constants/system';

const loginUser = (user, pass) => {
    let resData = "";
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'text/xml; charset=utf-8'},
        body: '<soapenv:Envelope xmlns:soapenv=\'http://schemas.xmlsoap.org/soap/envelope/\' ' +  
            'xmlns:log=\'http://Imed.com.ar/FwkImed/Login/\' ' + 
            'xmlns:fwk=\'FwkImed.SecurityCommon.Implementations\'>' + 
            '<soapenv:Header/><soapenv:Body><log:LoginUser><fwk:User>' +
            '<fwk:UserId>' + user.toUpperCase() + '</fwk:UserId>' +
            '<fwk:Password>' + pass + '</fwk:Password>' +
            '<fwk:System>' + SYSTEM_NAME + '</fwk:System>' +
            '</fwk:User></log:LoginUser></soapenv:Body></soapenv:Envelope>'
    }
    return fetch('http://test.imed.com.ar/Login/Services/Login.asmx', options)
    .then(response => response.text())
    .then(xmlData => parseString(xmlData, (err, result) => resData = result['soap:Envelope']['soap:Body'][0].LoginUserResponse[0].LoginUserResult[0]))
    .then(() => setLoginObject(resData.Response[0], resData.Content[0]))
    .catch(error => setErrorLoginObject(error));
}

const setLoginObject = (response, content) => {
    const login = {
        status: response.Status[0],
        message: response.Message[0],
        addInfo: response.AdditionalInformation[0],
        guid: response.AnswerGUID[0],
        userName: content.Item[0].Name[0]._,
    };
    return login;
}

const setErrorLoginObject = (error) => {
    const login = {
        status: ERROR,
        message: "Error al Realizar la llamada al WS",
        addInfo: error,
        guid: "",
        userName: "",
    };
    return login;
}

export { loginUser };
