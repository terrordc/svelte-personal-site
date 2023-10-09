/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const res = await fetch(`src/test_tSNE_a.json`);
    const tsneData = await res.json();
   
    return { tsneData };
  }