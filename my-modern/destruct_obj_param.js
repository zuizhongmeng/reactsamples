function greet({ name, age }) {
  console.log(`こんにちは、私は${name}、${age}歳です。`);
}

const my = { name: '佐藤理央', sex: 'female', age: 18 }; 
greet(my);