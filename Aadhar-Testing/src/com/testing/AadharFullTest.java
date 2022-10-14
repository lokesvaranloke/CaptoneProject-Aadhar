package com.testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AadharFullTest {

	WebDriver wd;
	
	@BeforeClass
	public void startBrowser() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "D:\\Trainings\\Tools\\chromedriver.exe");
		wd = new ChromeDriver();
		wd.get("http://localhost:4200/");
		wd.manage().window().maximize();
		Thread.sleep(2000);
	}
	
	
	@Test(priority = 1)
	public void citizenpage() throws InterruptedException {
		Thread.sleep(2000);
		wd.findElement(By.xpath("//button[normalize-space()='User Login']")).click();
		Thread.sleep(2000);
		wd.findElement(By.xpath("//a[normalize-space()='Register']")).click();
		Thread.sleep(2000);
		wd.findElement(By.id("name")).sendKeys("John");
		Thread.sleep(2000);
		wd.findElement(By.id("dob")).sendKeys("21/07/1863");
		Thread.sleep(2000);
		wd.findElement(By.id("emailid")).sendKeys("john@gmail.com");
		Thread.sleep(2000);
		wd.findElement(By.id("address")).sendKeys("austin");
		Thread.sleep(2000);
		wd.findElement(By.id("number")).sendKeys("7904121465");
		Thread.sleep(2000);
		wd.findElement(By.id("gender")).sendKeys("Male");
		Thread.sleep(2000);
		wd.findElement(By.xpath("//div[7]//div[1]")).click();
		Thread.sleep(5000);
		wd.findElement(By.xpath("//input[@id='citizenid']")).sendKeys("6");
		Thread.sleep(2000);
		wd.findElement(By.xpath("//input[@id='password']")).sendKeys("7904121818");
		Thread.sleep(2000);
		wd.findElement(By.xpath("//button[normalize-space()='Login']")).click();
		Thread.sleep(5000);
		wd.findElement(By.xpath("//body[1]/app-root[1]/div[1]/div[2]/div[1]/app-citizenhome[1]/div[1]/div[1]/div[2]/div[1]/button[1]")).click();
		Thread.sleep(2000);
		wd.findElement(By.id("name")).sendKeys(" Vicky");
		wd.findElement(By.xpath("//button[normalize-space()='Save changes']")).click();
		Thread.sleep(5000);
		wd.findElement(By.xpath("//button[normalize-space()='Close']")).click();
	}
	
	@Test(priority = 2)
	public void  adminpage() throws InterruptedException {
		wd.get("http://localhost:4200/");
		Thread.sleep(2000);
		wd.findElement(By.xpath("//button[normalize-space()='Admin Login']")).click();
		Thread.sleep(2000);
		wd.findElement(By.xpath("//input[@id='name']")).sendKeys("Admin");
		wd.findElement(By.xpath("//input[@id='email']")).sendKeys("admin@gmail.com");
		wd.findElement(By.xpath("//input[@id='password']")).sendKeys("Admin@123");
		wd.findElement(By.xpath("//button[normalize-space()='Login']")).click();
		Thread.sleep(2000);
		wd.findElement(By.xpath("//button[normalize-space()='View All']")).click();
		
	}
	
	@AfterClass
	public void stopBrowser() throws InterruptedException {
		Thread.sleep(5000);
		wd.quit();
	}
}
