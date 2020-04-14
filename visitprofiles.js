// To visit all friends profile
var webdriver = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://www.facebook.com');
driver.sleep(1000);
// replace 'username' with your facebook username/emailID
driver.findElement(webdriver.By.id('email')).sendKeys('username');
// replace 'password' with your facebook password
driver.findElement(webdriver.By.id('pass')).sendKeys('password');
driver.findElement(webdriver.By.id('email')).sendKeys(webdriver.Key.ENTER);

// add your friends list array here. You will get this using facebook API
var xArray = [];

for(var i=2100;i<xArray.length;i++)
{
    var pathFill = xArray[i].path;
    driver.get("http://www.facebook.com/"+pathFill);
}


