var ecc = eosjs_ecc;


var cyphertext;
var plaintext;
function encrypt(event) {
    event.preventDefault();
    console.log("Encrypt!");
    let plaintext = $('input[name=message]').val();
    let alices_private_key = $('input[name=alices_private_key]').val();
    let bobs_public_key = $('input[name=bobs_public_key]').val();
    cyphertext = ecc.Aes.encrypt(alices_private_key, bobs_public_key, plaintext);
    console.log("Cyphertext: " + cyphertext.message.toString('hex'));
    $('input[name=encrypted_message]').val(cyphertext.message.toString('hex'));
    $('input[name=nonce]').val(cyphertext.nonce);
    $('input[name=checksum]').val(cyphertext.checksum);
};

function decrypt(event) {
    event.preventDefault();
    console.log("decrypt!!!");
    let nonce = $('input[name=nonce]').val();
    let checksum = parseInt($('input[name=checksum]').val(), 10);
    let message = dcodeIO.ByteBuffer.fromHex($('input[name=encrypted_message]').val());
    console.log('message: '  + message.view);
    let alices_public_key = $('input[name=alices_public_key]').val();
    let bobs_private_key = $('input[name=bobs_private_key]').val();
    plaintext = ecc.Aes.decrypt(bobs_private_key, alices_public_key, nonce, message.toBinary(), checksum);
    $('span.decrypted_plaintext').text(plaintext);
}

async function setup() {
    await ecc.randomKey().then(x => {
        let bobs_private_key = x;
        let bobs_public_key = ecc.privateToPublic(x);
        $('input[name=bobs_public_key]').val(bobs_public_key);
        $('input[name=bobs_private_key]').val(bobs_private_key);


    });
    await ecc.randomKey().then(x => {
        let alices_private_key = x;
        let alices_public_key = ecc.privateToPublic(x);
        $('input[name=alices_public_key]').val(alices_public_key);
        $('input[name=alices_private_key]').val(alices_private_key);
    });

    setup_forms();
}

function setup_forms() {
    var form = $('.alice form');
    form.submit(encrypt);
    form.find('button').prop("disabled", false);

    $('.bob form').submit(decrypt);
}


$(function() {
    setup();
});
