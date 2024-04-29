#! /usr/bin/ env node
import inquirer from "inquirer";
// Printing a welcome message
console.log("\n\tWelcome to \'Giminikhan\' - Student Management System in Typescript\n");
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "Students",
        type: "input",
        message: "Enter student Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Please select the course to enroll.",
        choices: ["Ms.Office", "HTML", "Javascript", "Typescript", "Python"]
    }
]);
const tutionFee = {
    "Ms.Office": 2000,
    "HTML": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "Python": 10000
};
console.log(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Please select your payment method:",
        choices: [" Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations, You have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n*******Status*******\n");
        console.log(`Student Name: ${answer.Students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
