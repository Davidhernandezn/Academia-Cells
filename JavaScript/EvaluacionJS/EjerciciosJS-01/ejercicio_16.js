var age = 25;
var heigth = 5.12
var status = 'royalty';
var hasInvitation = false;

var isLegal = age >= 18; console.log(isLegal);
var tall = heigth >= 5.11; console.log(tall);
var suitable = isLegal && tall; console.log(suitable);
var isRoyalty = status === 'royalty'; console.log(isRoyalty);
var specialCase = isRoyalty && hasInvitation; console.log(specialCase);
var canEnterOurBar = suitable || specialCase; console.log(canEnterOurBar);
