export const formatBeneftisContent = (benefits) => {
  let formatedBenefits = benefits.map((benefit) => {
    return benefit
      .replace(/<[^>]*>|/g, '')
      .replace(/&nbsp;/g, '')
      .replace(/&rsquo;s/g, '');
  });
  return formatedBenefits;
};

export const formatIntro = (intro) => {
  let formatedIntro = intro.replace(/<[^>]*>|/g, '');
  return formatedIntro;
};
