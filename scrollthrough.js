//scroll continously through fb feed
var webdriver = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://www.facebook.com');
driver.sleep(1000);
// replace 'username' with your facebook username/emailID
driver.findElement(webdriver.By.id('email')).sendKeys('username');
// replace 'password' with your facebook password
driver.findElement(webdriver.By.id('pass')).sendKeys('password');
driver.findElement(webdriver.By.id('email')).sendKeys(webdriver.Key.ENTER);

var i = 1;
while (i < 20000) {
    driver.executeScript("window.scrollBy(0,450)", "");
    driver.sleep(1000);
    i++;
}

