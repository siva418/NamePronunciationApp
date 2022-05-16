﻿$(document).ready(function () {
    $("#btnplay").click(function () {
        var speechModel = new CreateSpeechModel();
        $.ajax({
            url: '/speech/TextToSpeech',
            contentType: 'application/json',
            type: 'Post',
            data: JSON.stringify(speechModel),
            success: function (data) {

            }
        })
    });
});

function CreateSpeechModel() {
    var speechModel = this;
    speechModel.EmployeeAdEntId = $("#adEntId").text();
    speechModel.Name = $("#preferredName").text() != null && $("#preferredName").text() != undefined && $("#preferredName").text() != ''
        ? $("#preferredName").text().trim() : $("#empName").text();
    speechModel.Region = $("#country").text();
    return speechModel;
}