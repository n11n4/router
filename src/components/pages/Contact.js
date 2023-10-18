import React from 'react';
function ContactPage(){
return(
<div className="container">
    <div class="card">
        <div class="card-header"><strong>Contant Me</strong></div>
            <div class="card-body">
            <p class="card-text">for questions or feedback:</p>
        </div>
    </div>
    <p></p>
    <div class="card">
        <div class="card-header">General inquiries</div>
            <div class="card-body">
            <p class="card-text">for general inquiries, email us at:</p>
            <button type="button" class="btn btn-primary">general@example.com</button>
        </div>
    </div>
    <p></p>
    <div class="card">
        <div class="card-header">Feedback</div>
            <div class="card-body">
            <p class="card-text">share your feedback with us at:</p>
            <button type="button" class="btn btn-warning">feedback@example.com</button>
        </div>
    </div>
    <p></p>
    <div class="card">
        <div class="card-header">Support</div>
            <div class="card-body">
            <p class="card-text">we also provide assistance at:</p>
            <button type="button" class="btn btn-secondary">help@example.com</button>
        </div>
    </div>

</div>
);
}
export default ContactPage;