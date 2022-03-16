export const calculateAddedButtons = function() {

  let added = [];

  for (let i = 0; i < 2; i++) {
    const button = Math.floor(Math.random() * 4) + 1;
    added.push(button);
  }

  return added;
}

export function timeout (ms) {
  
  return new Promise(resolve => setTimeout(resolve, ms))

}

