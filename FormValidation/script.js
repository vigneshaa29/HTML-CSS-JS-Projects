function valid() {
            //First Name
            t1 = document.getElementById('txt1');
            e1 = document.getElementById('erbox1');
            exp1 = /^[a-zA-Z]{3,8}$/;

            if (t1.value == "") {
                e1.innerHTML = "Enter First Name";
                t1.focus();
                return false;
            }
            else if (exp1.test(t1.value) == false) {
                e1.innerHTML = "Enter A Valid Name";
                t1.focus();
                return false;
            }
            else {
                e1.innerHTML = "";
            }
            //Last Name
            t2 = document.getElementById("txt2");
            e2 = document.getElementById("erbox2");
            exp2 = /^[a-zA-Z]{3,8}$/;
            if (t2.value == "") {
                e2.innerHTML = "Enter Last Name";
                t2.focus();
                return false;
            }
            else if (exp2.test(t2.value) == false) {
                e2.innerHTML = "Enter A Valid Name";
                t2.focus();
                return false;
            }
            else {
                e2.innerHTML = "";
            }
            //Password
            p1 = document.getElementById("pwd1");
            e3 = document.getElementById("erbox3");
            var p3=document.form1.pwd1.value;
            exp3 = /^[a-zA-Z0-9]{4,10}$/;
            if (p1.value == "") {
                e3.innerHTML = "Enter Password";
                p1.focus();
                return false;
            }
            else if (exp3.test(p1.value) == false) {
                e3.innerHTML = "Enter A Valid Password";
                p1.focus();
                return false;
            }
            else {
                e3.innerHTML = "";
            }
            //Confirm Password
            p2 = document.getElementById("pwd2");
            e4 = document.getElementById("erbox4");
            var p4=document.form1.pwd2.value;
            exp4 = /^[a-zA-Z0-9]{4,10}$/;
            if (p2.value == "") {
                e4.innerHTML = "Enter Password";
                p2.focus();
                return false;
            }
            else if (exp4.test(p2.value) == false) {
                e4.innerHTML = "Enter A Valid Password";
                p2.focus();
                return false;
            }
            else if (p3!== p4) {
                e4.innerHTML = "Password Doesn't Match";
                p2.focus();
                return false;
            }
            else {
                e4.innerHTML = "";
            }
            //Email
            s1 = document.getElementById("mail");
            e5 = document.getElementById("erbox5");
            exp5 = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
            if (s1.value == "") {
                e5.innerHTML = "Enter Email";
                s1.focus();
                return false;
            }
            else if (exp5.test(s1.value) == false) {
                e5.innerHTML = "Enter A Valid Email";
                s1.focus();
                return false;
            }
            else {
                e5.innerHTML = "";
            }

            //Phone Number
            m1 = document.getElementById("phone");
            e6 = document.getElementById("erbox7");
            exp6 = /^[6-9]{1}[0-9]{9}$/;
            if (m1.value == "") {
                e6.innerHTML = "Enter Phone Number";
                m1.focus();
                return false;
            }
            else if (exp6.test(m1.value) == false) {
                e6.innerHTML = "Enter A Valid Phone Number";
                m1.focus();
                return false;
            }
            else {
                e6.innerHTML = "";
            }
        }
        //Address
        function CharacterCount(address) {
            var MaximumLength = 120;
            var charLength = address.value.length;
            var RemainCharacters = (MaximumLength - charLength);

            if (RemainCharacters < 0) {
                document.getElementById("erbox6").innerHTML = 'You exceeded the limit of ' + MaximumLength + ' characters';
            } else {
                document.getElementById("erbox6").innerHTML = RemainCharacters + ' characters remaining';
            }
        }