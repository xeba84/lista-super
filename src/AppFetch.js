import React, { Component } from 'react';
import { parseString } from 'xml2js';

class AppFetch extends Component {

    constructor(){
        super();
        this.state = {data:"", number:0};
    }

    render() {
        return (
            <div>
                <h3>DATA:</h3><div><pre>{JSON.stringify(this.state.data, null, 2)} </pre></div>
                <br/>
                <h3>TIMES: {this.state.number}</h3>
                <button type="button" onClick={this.fetchJsonData}>JSON</button>
                &nbsp;&nbsp;
                <button type="button" onClick={this.fetchXmlDataGet}>XML GET</button>
                &nbsp;&nbsp;
                <button type="button" onClick={this.fetchXmlDataPost}>XML POST</button>
            </div>
        );
    }

    fetchJsonData = () => {
        fetch('http://date.jsontest.com/')        
        .then(response => response.json())
        .then(data => this.setState({number: this.state.number+1, data:data}))
    }

    fetchXmlDataGet = () => {
        let resData = "";
        fetch('http://test.imed.com.ar/Login/Services/Login.asmx/LoginUserPlain?userId=SSANCH&password=Inicio00&systemId=Mandados.Site')
        .then(response => response.text())
        .then(xmlData => parseString(xmlData, (err, result) => resData = result.AnswerOfUserComplete))
        .then(() => this.setLoginObject(resData.Response[0], resData.Content[0]))
        .catch(error => console.log("ERROR ->" + error));
    }

    fetchXmlDataPost = () => {
        let resData = "";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml; charset=utf-8', //'SOAPAction': 'http://Imed.com.ar/FwkImed/Login/LoginUserPlain'
            },
            body: '<soapenv:Envelope xmlns:soapenv=\'http://schemas.xmlsoap.org/soap/envelope/\' xmlns:log=\'http://Imed.com.ar/FwkImed/Login/\' xmlns:fwk=\'FwkImed.SecurityCommon.Implementations\'> <soapenv:Header/> <soapenv:Body> <log:LoginUser> <fwk:User> <fwk:UserId>SSANCH</fwk:UserId> <fwk:Password>Inicio00</fwk:Password> <fwk:System>Mandados.Site</fwk:System> </fwk:User> </log:LoginUser> </soapenv:Body> </soapenv:Envelope>'
        }

        fetch('http://test.imed.com.ar/Login/Services/Login.asmx', options)
        .then(response => response.text())
        .then(xmlData => parseString(xmlData, (err, result) => resData = result['soap:Envelope']['soap:Body'][0].LoginUserResponse[0].LoginUserResult[0]))
        .then(() => this.setLoginObject(resData.Response[0], resData.Content[0]))
        .catch(error => console.log("ERROR ->" + error));
    }

    setLoginObject(response, content){
        const login = {
            status: response.Status[0],
            message: response.Message[0],
            addInfo: response.AdditionalInformation[0],
            guid: response.AnswerGUID[0],
            userName: content.Item[0].Name[0]._,
        };
        this.setState({number: this.state.number+1, data:login});
    }
}

export default AppFetch;
