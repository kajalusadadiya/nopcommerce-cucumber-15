package com.nopcommerce.cucumber.steps;

import com.nopcommerce.pages.ComputerPage;
import com.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @When("^I Click on Computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnComputersTab();
    }

    @Then("^I Verify \"([^\"]*)\" text$")
    public void iVerifyText(String message) {
        String atcualMessage = new ComputerPage().getPageTitleText();
        Assert.assertEquals("you are not on Computer Page", message, atcualMessage);
    }

    @And("^I Click on Desktops link$")
    public void iClickOnDesktopsLink() {
        new ComputerPage().clickOnDesktopLink();
    }
}
