'use strict';

Vue.mixin({
    data: function data() {
        return {
            phone: '',
            bankName: '',
            subbranchName: '',
            accountName: '',
            bankAccount: '',
            principalName: '',
            principalPhone: '',
            idNumber: '',
            validityMsg: {
                phoneValidityMsg: '', //联系电话验证信息
                bankNameValidityMsg: '', //开户银行验证信息
                subbranchNameValidityMsg: '', //开户支行验证信息
                accountNameValidityMsg: '', //开户名称验证信息
                bankAccountValidityMsg: '', //银行账号验证信息
                principalNameValidityMsg: '', //负责人姓名验证信息
                principalPhoneValidityMsg: '', //负责人联系电话验证信息
                idNumberValidityMsg: '' //负责人身份证号验证信息
            }
        };
    },
    methods: {
        // 校验联系电话
        phoneValidate: function phoneValidate(e) {
            var reg = /^1[3|4|5|7|8][0-9]{9}$/,
                target = e.target || e.srcElement,
                value = target.value;

            if (instancePage.emptyValidate(value) || !reg.test(value)) {
                instancePage.validityMsg.phoneValidityMsg = '联系电话格式错误！';
                return;
            }

            instancePage.validityMsg.phoneValidityMsg = '';
        },
        // 校验开户银行
        bankNameValidate: function bankNameValidate(e) {
            var target = e.target || e.srcElement,
                value = target.value;
            if (instancePage.emptyValidate(value)) {
                instancePage.validityMsg.bankNameValidityMsg = '开户银行格式错误！';
                return;
            }

            instancePage.validityMsg.bankNameValidityMsg = '';
        },
        // 校验开户支行
        subbranchNameValidate: function subbranchNameValidate(e) {
            var target = e.target || e.srcElement,
                value = target.value;
            if (instancePage.emptyValidate(value)) {
                instancePage.validityMsg.subbranchNameValidityMsg = '开户支行格式错误！';
                return;
            }

            instancePage.validityMsg.subbranchNameValidityMsg = '';
        },
        // 校验开户名称
        accountNameValidate: function accountNameValidate(e) {
            var target = e.target || e.srcElement,
                value = target.value;
            if (instancePage.emptyValidate(value)) {
                instancePage.validityMsg.accountNameValidityMsg = '开户名称格式错误！';
                return;
            }

            instancePage.validityMsg.accountNameValidityMsg = '';
        },
        // 校验银行账号
        bankAccountValidate: function bankAccountValidate(e) {
            var target = e.target || e.srcElement,
                value = target.value;
            if (instancePage.emptyValidate(value)) {
                instancePage.validityMsg.bankAccountValidityMsg = '银行账号格式错误！';
                return;
            }

            instancePage.validityMsg.bankAccountValidityMsg = '';
        },
        // 校验负责人姓名
        principalNameValidate: function principalNameValidate(e) {
            var target = e.target || e.srcElement,
                value = target.value;
            if (instancePage.emptyValidate(value)) {
                instancePage.validityMsg.principalNameValidityMsg = '负责人姓名格式错误！';
                return;
            }

            instancePage.validityMsg.principalNameValidityMsg = '';
        },
        // 校验负责人联系电话
        principalPhoneValidate: function principalPhoneValidate(e) {
            var target = e.target || e.srcElement,
                value = target.value;
            if (instancePage.emptyValidate(value)) {
                instancePage.validityMsg.principalPhoneValidityMsg = '负责人联系电话格式错误！';
                return;
            }

            instancePage.validityMsg.principalPhoneValidityMsg = '';
        },
        // 校验负责人身份证号
        idNumberValidate: function idNumberValidate(e) {
            var reg = /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/,
                target = e.target || e.srcElement,
                value = target.value;
            if (instancePage.emptyValidate(value)) {
                instancePage.validityMsg.idNumberValidityMsg = '负责人身份证号格式错误！';
                return;
            }

            instancePage.validityMsg.idNumberValidityMsg = '';
        },
        // 非空校验
        emptyValidate: function emptyValidate(val, field) {
            return val.trim() == '';
        }

    }
});