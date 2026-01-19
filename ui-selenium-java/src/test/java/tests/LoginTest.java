package tests;

import org.testng.Assert;
import org.testng.annotations.Test;
import pages.LoginPage;

public class LoginTest extends BaseTest {

    @Test
    public void invalidLoginShowsError() {
        LoginPage loginPage = new LoginPage(driver);

        loginPage.enterUsername("wronguser");
        loginPage.enterPassword("wrongpass");
        loginPage.clickLogin();

        // Assert the error message
        String error = loginPage.getErrorMessage();
        Assert.assertEquals(error, "Invalid username or password");
    }
}
