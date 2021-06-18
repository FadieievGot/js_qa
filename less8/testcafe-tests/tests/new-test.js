import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://the-internet.herokuapp.com/`;

test('My first test', async t => {
    await t
        .openWindow('/upload')
        .setFilesToUpload('#file-upload', 'image.png')
        .click('#file-submit')
        .expect(Selector('#uploaded-files').innerText).eql('image.png');

});
