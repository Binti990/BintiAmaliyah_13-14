import { expect} from 'chai';

describe('Appium Demo App', () => {

    afterEach(async () => {
        await browser.execute('mobile: terminateApp', { appId: 'io.appium.android.apis'});
        await browser.pause(1000);
    });

    it.only('Input ke Elemen', async () => {
        
        const appMenu = await $('//android.widget.TextView[@content-desc="App"]');
        const alertdialogsMenu = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        const textentrydialogMenu = await $('//android.widget.Button[@content-desc="Text Entry dialog"]');
        await appMenu.click();
        await alertdialogsMenu.click();
        await textentrydialogMenu.click();
        
        const nameField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        const passField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
        await nameField.setValue('admin');
        await passField.setValue('admin123');
    });
});