const pkg = require('cypress/package.json');
const execa = require('execa');

const version = pkg.version;

(async () => {
  console.log('Installing Cypress ' + version);
  await execa('npm', ['run', 'cypress:install'], {
    env: { CYPRESS_INSTALL_BINARY: version }
  });
  console.log('Cypress installed');
})();

bmaeecnfdlbpdjbbqcwmiinetpqupmupbhriqiibhwzvieriyzltgxpgrqkdevytlz

ncregnsfexjtzjwwlwkpuswdzvktxvkqbkzqpesdbvssfyirsbivycfkcqnwborbsbeiyqohkjelnuwjesgwxxrcaiamxzswatvqvnzcwxademuogtbvkkhudmuqmqiznmaderpwjwyzzbawqtwzznbqxhdzfnqycwpezgbalraucmumvkrasxdgrcrttnrvpgxievjzkeqdejsgpcrrgygefwajdjdmjxaykxkgdafvmtljhbflqtbfjdjxkllnispalkmptfauyonjpqgykaslckiuxbubwjfcgsrbotevpgpbnoyeofsnbwtwlxlivksiesyczuedekkswuxsfshqwrsoqzsajwwuxospqtylnywbachrvzkjsggkudvymrsukdoxcmvrmnqthxdwvucuxzvxayoqjwbdwitsunxdlwxnefxdkoaztucyiwxcfqytyrwmglvnfkjuiknwnrnvviyyokshcsjxtngtnydrccdwmqig
