function hasMenuSelected(menuSelected: string) {
  return menuSelected && menuSelected.length > 0;
}

function menuIconHandler(menuSelected: string, callback: Function) {
  if (hasMenuSelected(menuSelected)) {
    callback('');
    return;
  }

  callback('menu');
}

export { menuIconHandler, hasMenuSelected };
