(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-student></app-student>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student-list/student-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student-list/student-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <input class=\"form-control\" name=\"searchInput\" placeholder=\"Search Students into Marvellous DB\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\" style=\"width: 80%;\">\n  <button class=\"btn btn-outline-primary\" (click)=\"searchText=''\">Clear</button>\n</form>\n<table class=\"table table-sm\">\n  <thead>\n    <th>Name</th>\n    <th>Address</th>\n    <th>Number</th>\n    <th></th>\n  </thead>\n  <ng-container *ngFor=\"let student of studentArray\">\n    <tr class=\"table-dark\" *ngIf=\"filterCondition(student)\">\n      <td>{{student.fullName}}</td>\n      <td>{{student.email}}</td>\n        <td>{{student.mobile}}</td>\n        <td>\n          <button class=\"btn btn-outline-info\" (click)=\"studentService.populateForm(student)\">Edit Information</button>\n          <button class=\"btn btn-outline-danger\" (click)=\"onDelete(student.$key)\">Cancel Addmission</button>\n        </td>\n    </tr>\n  </ng-container>\n</table>\n<div class=\"alert alert-danger\" *ngIf=\"showDeletedMessage\">\n  Deleted successfully from Marvellous Database.\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/student.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/student.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Marvellous Infosystems Student Management Portal</h1>\n<br>\n<br>\n<div class=\"row\">\n  <div class=\"col-md-5\">\n    <form [formGroup]=\"this.studentService.form\" (ngSubmit)=\"onSubmit()\">\n      <input type=\"hidden\" formControlName=\"$key\">\n      <div class=\"form-group\">\n        <label>Student's Name</label>\n        <input formControlName=\"fullName\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.fullName.errors}\">\n        <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.fullName.errors\">\n          Please enter Stude.</div>\n      </div>\n      <div class=\"form-group\">\n        <label>Email Address</label>\n        <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.email.errors}\">\n        <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.email.errors\">\n          Invalid email address.</div>\n      </div>\n      <div class=\"form-group\">\n        <label>Mobile Number</label>\n        <input formControlName=\"mobile\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.mobile.errors}\">\n        <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.mobile.errors\">\n          <label *ngIf=\"formControls.mobile.errors.required\">Mobile number is Compulsorry for further communication. You will receive messages from Marvellous Innfosystems.</label>\n          <label *ngIf=\"formControls.mobile.errors.minlength\">Invalid Mobile Number</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Address</label>\n        <input formControlName=\"location\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n      </div>\n    </form>\n    <div class=\"alert alert-info\"  *ngIf=\"showSuccessMessage\">\n      Data gets Submitted to Marvellous Database.\n    </div>\n  </div>\n  <div class=\"col-md-7\">\n    <app-student-list></app-student-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/student.service */ "./src/app/shared/student.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"],
            _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_8__["StudentListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig),
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [_shared_student_service__WEBPACK_IMPORTED_MODULE_9__["StudentService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/student.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/student.service.ts ***!
  \*******************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




let StudentService = class StudentService {
    constructor(firebase) {
        this.firebase = firebase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    getStudents() {
        this.studentList = this.firebase.list('students');
        return this.studentList.snapshotChanges();
    }
    insertStudent(student) {
        this.studentList.push({
            fullName: student.fullName,
            email: student.email,
            mobile: student.mobile,
            location: student.location
        });
    }
    populateForm(student) {
        this.form.setValue(student);
    }
    updateStudent(student) {
        this.studentList.update(student.$key, {
            fullName: student.fullName,
            email: student.email,
            mobile: student.mobile,
            location: student.location
        });
    }
    deleteStudent($key) {
        this.studentList.remove($key);
    }
};
StudentService.ctorParameters = () => [
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StudentService);



/***/ }),

/***/ "./src/app/student-list/student-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-list/student-list.component.ts ***!
  \********************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/student.service */ "./src/app/shared/student.service.ts");



let StudentListComponent = class StudentListComponent {
    constructor(studentService) {
        this.studentService = studentService;
        this.studentArray = [];
        this.searchText = "";
    }
    ngOnInit() {
        this.studentService.getStudents().subscribe(list => {
            this.studentArray = list.map(item => {
                return Object.assign({ $key: item.key }, item.payload.val());
            });
        });
    }
    onDelete($key) {
        if (confirm('Marvellous : Are you sure to cancel this Addmission ?')) {
            this.studentService.deleteStudent($key);
            this.showDeletedMessage = true;
            setTimeout(() => this.showDeletedMessage = false, 3000);
        }
    }
    filterCondition(student) {
        return student.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    }
};
StudentListComponent.ctorParameters = () => [
    { type: _shared_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] }
];
StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-list',
        template: __webpack_require__(/*! raw-loader!./student-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/student-list/student-list.component.html")
    })
], StudentListComponent);



/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/student.service */ "./src/app/shared/student.service.ts");



let StudentComponent = class StudentComponent {
    constructor(studentService) {
        this.studentService = studentService;
        this.formControls = this.studentService.form.controls;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.submitted = true;
        if (this.studentService.form.valid) {
            if (this.studentService.form.get('$key').value == null) {
                this.studentService.insertStudent(this.studentService.form.value);
            }
            else {
                this.studentService.updateStudent(this.studentService.form.value);
            }
            this.showSuccessMessage = true;
            setTimeout(() => this.showSuccessMessage = false, 3000);
            this.submitted = false;
            this.studentService.form.reset();
            //this is to be done for proper reset operation
            this.studentService.form.setValue({
                $key: null,
                fullName: '',
                email: '',
                mobile: '',
                location: ''
            });
        }
    }
};
StudentComponent.ctorParameters = () => [
    { type: _shared_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] }
];
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: __webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/student.component.html")
    })
], StudentComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyBpsBOK62mPOSvMvpyrDJE0hwIO_DsTDOg",
        authDomain: "fir-e69cf.firebaseapp.com",
        databaseURL: "https://fir-e69cf.firebaseio.com",
        projectId: "fir-e69cf",
        storageBucket: "fir-e69cf.appspot.com",
        messagingSenderId: "27085185068",
        appId: "1:27085185068:web:291bf5feac532d44"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\angular\MarvellousFirebase1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map