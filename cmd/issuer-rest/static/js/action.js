/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
 */

$(document).ready(function () {
    $('#profile').on('change', function () {
        if ($(this).val() != "") {
            $('#vcsProfile').val($(this).val());
        } else {
            $('#vcsProfile').val('');
        }
    });

    $('#studentCard').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("StudentCard");
            $(this).data('clicked', true);
        }
    });

    $('#prCard').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("PermanentResidentCard");
            $(this).data('clicked', true);
        }
    });

    $('#vaccinationCertificate').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("VaccinationCertificate");
            $(this).data('clicked', true);
        }
    });

    $('#travelCard').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("TravelCard");
            $(this).data('clicked', true);
        }
    });

    $('#cpr').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("CrudeProductCredential");
            $(this).data('clicked', true);
        }
    });

    $('#universityDegree').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("UniversityDegreeCredential");
            $(this).data('clicked', true);
        }
    });

    $('#cmtr').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("CertifiedMillTestReport");
            $(this).data('clicked', true);
        }
    });

    $('#bookingReference').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#scope').val("BookingReferenceCredential");
            $(this).data('clicked', true);
        }
    });

    $('#studentCard, #prCard, #vaccinationCertificate, #travelCard, #cpr, #universityDegree, #cmtr, #bookingReference').on('click', function() {
        if (document.cookie.split('vcsProfile').length > 1) {
            var cookieValue = document.cookie.split("vcsProfile=")[1].split(';')[0];
            $('#vcsProfile').val(cookieValue);
        }
        document.getElementById('formSubmit').click();
    });

    $('#creditCard').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#demoType').val("DIDComm");
            $('#didCommScope').val("CreditCardStatement");
            $('#adapterProfile').val("tb-cc-issuer");
            $(this).data('clicked', true);
            document.getElementById('didFormSubmit').click();
        }
    });

    $('#drivingLicense').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#demoType').val("DIDComm");
            $('#didCommScope').val("mDL");
            $('#adapterProfile').val("tb-dl-issuer");
            $('#assuranceScope').val("mdlevidences");
            $(this).data('clicked', true);
            document.getElementById('didFormSubmit').click();
        }
    });

    $('#uploadDrivingLicense').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#demoType').val("DIDComm");
            $('#didCommScope').val("mDL");
            $('#adapterProfile').val("tb-dl-issuer");
            $('#assuranceScope').val("mdlevidences");
            $(this).data('clicked', true);
        }
    });

    $('#creditScore').on('click', function() {
        if (!$(this).data('clicked')) {
            $('#demoType').val("DIDComm");
            $('#didCommScope').val("CreditScore");
            $('#adapterProfile').val("tb-cr-issuer");
            $(this).data('clicked', true);
            document.getElementById('didFormSubmit').click();
        }
    });


    $('#revokeVCBtn').on('click', function() {
        if (!$(this).data('clicked')) {
            $(this).data('clicked', true);
        }
    });

    $('#demoSetupForm').submit(function () {

        if($('#studentCard').data('clicked'))
        {
            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#travelCard").data('clicked'))  {

            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#universityDegree").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#cmtr").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#cpr").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        }  else if ($("#prCard").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        }  else if ($("#vaccinationCertificate").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        }  else if ($("#bookingReference").data('clicked')) {

            $('#demoSetupForm').attr('action', '/login?');

        } else if ($("#revokeVCBtn").data('clicked')) {

            $('#demoSetupForm').attr('action', 'view/revoke.html');

        } else {

            $('#message').text("Profile is not selected").show().fadeOut(2000);
        }
    });

    $('#didCommDemo').submit(function () {

        if($('#creditCard').data('clicked'))
        {
            $('#didCommDemo').attr('action', '/login?');

        } else if ($("#drivingLicense").data('clicked'))
        {
            $('#didCommDemo').attr('action', '/login?');

        } else if ($("#creditScore").data('clicked'))
        {
            $('#didCommDemo').attr('action', '/login?');
        } else if ($("#uploadDrivingLicense").data('clicked'))
        {
            $('#didCommDemo').attr('action', '/login?');
        }
    });
});
