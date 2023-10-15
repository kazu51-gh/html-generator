const determineNumberOfListTags = (numberOfLists: number): string => {
  if (numberOfLists === 1) {
    return('\t<li>text</li>\r\n');
  } else if (numberOfLists === 2) {
    return('\t<li>text</li>\r\n\t<li>text</li>\r\n');
  } else {
    let code = '';
    for(let i = 0; i < numberOfLists; i++) {
      code = code + '\t<li>text</li>\r\n';
    }
    return code;
  }
}