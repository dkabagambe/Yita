import axios from "axios";

// export let USER_API_URL = "http://localhost/yitaconnect";
export let USER_API_URL = "/api";
// export let USER_API_URL = "https://yitalife.com/api";
class Api {
  getAppointments(e) {
    return axios.get(`${USER_API_URL}/read1.php`);
  }
  getImage(e) {
    return axios.get(`${USER_API_URL}/images.php`);
  }
  createAppointments(user) {
    return axios.post(`${USER_API_URL}/write.php`, user);
  }
  sendmail(user) {
    return axios.post(`${USER_API_URL}/mail.php`, user);
  }
  sendmailp(user) {
    return axios.post(`${USER_API_URL}/mailp.php`, user);
  }
  getUserById(Username, Password) {
    console.log("DFGHJKL:", Username);
    return axios.get(`${USER_API_URL}/single_user.php`, {
      params: { Username: Username, Password: Password },
    });
  }
  getAppointOne(e) {
    return axios.get(`${USER_API_URL}/oneappoint.php`, {
      params: { Tx: e },
    });
  }
  LoginUser(e, b) {
    return axios.get(`${USER_API_URL}/user.php`, {
      params: { Username: e, Password: b },
    });
  }
  GetSingle(e) {
    return axios.get(`${USER_API_URL}/single.php`, {
      params: { Email: e },
    });
  }

  deleteRecord(Invoice) {
    return axios.delete(`${USER_API_URL}/delete.php`, {
      params: { Invoice: Invoice },
    });
  }
  DelImg(Id) {
    return axios.delete(`${USER_API_URL}/detateimage.php`, {
      params: { Id: Id },
    });
  }
  updateBank(data) {
    return axios.put(`${USER_API_URL}/UpdateBank.php`, data);
  }
  updatePay(data) {
    return axios.put(`${USER_API_URL}/updateone.php`, data);
  }
  UpPass(data) {
    return axios.put(`${USER_API_URL}/updatePass.php`, data);
  }
  updateAction(data) {
    return axios.put(`${USER_API_URL}/manage.php`, data);
  }
  updateInvoiceAll(data) {
    return axios.put(`${USER_API_URL}/updateAllInvoice.php`, data);
  }
  upload(data) {
    return axios.post(`${USER_API_URL}/up.php`, data, {});
  }
  saveUpload(data) {
    return axios.post(`${USER_API_URL}/savelink.php`, data, {});
  }
}
export default new Api();
