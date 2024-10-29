export async function slow(ms: number = 3000) {
  await new Promise(resolve => {
    return setTimeout(resolve, ms);
  });
}
