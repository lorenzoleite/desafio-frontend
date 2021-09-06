const descubra_o_que_eu_faco = (parameter01, parameter02) => {
  let var01 = {};
  let var02 = 0;
  [...parameter02].filter((p) => /[A-Za-z]/.test(p))
  .map((c) => c.toLowerCase())
  .forEach(
  (p) => {
    console.log(var01);
  if (!(p in var01)) {
  var02 += 1;
  var01[p] = true;
  }
  });
  console.log(var02);
  return console.log(var02 == parameter01);
  };

descubra_o_que_eu_faco("26", "Ja fiz vinho com toque de kiwi para belga sexy");