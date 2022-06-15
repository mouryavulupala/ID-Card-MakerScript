        import { initializeApp } from "firebase/app";
        import { getAnalytics } from "firebase/analytics";
        import { getDatabase, ref, set } from "firebase/database";

       const firebaseConfig = {
         apiKey: "AIzaSyB55hiOSP5SUkqTX3APLfrBpSAfNklwC_o",
         authDomain: "zenith-id-sw.firebaseapp.com",
         databaseURL: "https://zenith-id-sw-default-rtdb.firebaseio.com",
         projectId: "zenith-id-sw",
         storageBucket: "zenith-id-sw.appspot.com",
         messagingSenderId: "743882210774",
         appId: "1:743882210774:web:f7561178426c85156cf877",
         measurementId: "G-GD1Y6VGNNV"
       };

       // Initialize Firebase
       const app = initializeApp(firebaseConfig);
       const analytics = getAnalytics(app);
       const db = getDatabase();
       
       function writeUserData(companyname, employeename, employeedesignation, employeenumber, faceIMG, companyIMG) {
           set(ref(db, companyname + '/' + employeename), {
               employee_name: employeename,
               employee_designation: employeedesignation,
               employee_number: employeenumber,
               face_picture: faceIMG
           });
       };

       
        function pullDetails() {
            var companyname = document.getElementById("companyname").value;

            var employeename = document.getElementById("employeename").value;

            var employeedesignation = document.getElementById("employeedesignation").value;

            var employeenumber = document.getElementById("employeenumber").value;
            
            var faceIMG = document.getElementById("faceImage");
            
            var companyIMG = document.getElementById("company-logo");

           writeUserData(companyname, employeename, employeedesignation, employeenumber, faceIMG, companyIMG);
        };

        var changeFACE = function(event) {
            var image = document.getElementById('faceImage');
            image.src = URL.createObjectURL(event.target.files[0]);
        };  
        
        var changeCOMP = function(event) {
            var image = document.getElementById('company-logo');
            image.src = URL.createObjectURL(event.target.files[0]);
        }; 