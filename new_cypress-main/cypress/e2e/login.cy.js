import * as data from "../helpers/default_data.json"

describe('Проверка авторизации', function () {

beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
                  });

afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                       });
               

it('Верный логин, верный пароль', function () {
       
       cy.get('#mail').type(data.login); // ввожу правильный логин
       cy.get('#pass').type(data.password); // ввожу правильный пароль
       cy.get('#loginButton').click(); // нажимаю войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверяю правильный текст
       cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
       })

it('Восстановление пароля', function () {
        
        cy.get('#forgotEmailButton').click(); // нажимаю кнопку забыли пароль
        cy.get('#mailForgot').type(data.login); // ввожу правильный логин
        cy.get('#restoreEmailButton').click(); // нажимаю отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// проверяю правильный текст
        cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
        })

it('Неверный логин, верный пароль', function () {
        
        cy.get('#mail').type('germandolnikov.ru'); // ввожу неправильный логин
        cy.get('#pass').type(data.login); // ввожу правильный пароль
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// проверяю правильный текст
        cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
        })
it('Верный логин, неверный пароль', function () {
        
        cy.get('#mail').type(data.login); // ввожу правильный логин
        cy.get('#pass').type('iLoveqastudio2'); // ввожу неправильный пароль
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверяю правильный текст
        cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
        })
it('Проверка на приведение к строчным буквам', function () {
       
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввожу правильный логин с верхним регистром
        cy.get('#pass').type(data.login); // ввожу правильный пароль
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверяю правильный текст
        cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
        })  
        })


    