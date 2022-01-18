import React, { Component } from 'react';
import axios from 'axios';
export class Employee extends Component {

   

    getEmployee() {
        debugger;

        //const param = {
        //    appid: 5,
        //    sessionid: 'VTGessQRiaexOJOFEsq0GeiM_0gov4XBdTNH3w8N_2EztdS4-cuir9ns4yE-hVtRHYCW4eIsnWSE_h7MC41C2r-ShDdYJUXdvz_q86UxbcbLjmt8YZXMazYC3qgF6WActEHsHaIu4hFSWpg4X1lk7LQe28VSMPpcBg_9bxm5pXVbOqI8t5U4nOS7NQinDN-d-VOZu-4BqhZS3i6WBA2kbyebswf2nLdxsDV3_lhXMDg.',
        //    userid: 'RMSI.Geoportal1'
        //};
        //axios.post('https://150.230.51.41/NEOM/api/NotificationsApi', param)
        //    .then(response => {
        //        debugger;
        //    }).catch((err) => {
        //        debugger;

        //    });

        // const param = {
        //     accountinformation: 'Testing',
        //     action: 'insert',
        //     address: 'testing p',
        //     benefitsserviceprovidersid: 0,
        //     contactno: '9015020650',
        //     email: 'abhinav.saxema@rmsi.com',
        //     serviceprovidertypeid: '1',
        //     serviceprovidertypenameid: '4'
        // };
        // axios.post('https://corp-sqldb/mis/api/BSPAPI', param)
        //     .then(response => {
        //         debugger;
        //     }).catch((err) => {
        //         debugger;
               
        //     });

        axios.get('http://corp-sqldb/mis/api/BSPAPI').then(res => {
           debugger;
           console.log(res);
        });
        //alert('hii');
    }

    render() {
        return (           
                <button onClick={this.getEmployee}>Show Employee</button>           
        )
    }
}