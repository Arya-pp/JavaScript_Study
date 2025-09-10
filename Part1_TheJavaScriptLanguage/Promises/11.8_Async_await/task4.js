let database;

function connect() {
  database = {
    async query(isOk) {
      if (!isOk) throw new Error('Query failed');
    }
  };
}

function disconnect() {
  database = null;
}

function delay(fn, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => fn().then(resolve, reject), ms);
  });
}

async function run() {
  connect();

  let results = await Promise.allSettled([
    delay(() => database.query(true), 100),
    delay(() => database.query(false), 200),
    delay(() => database.query(false), 300)
  ]);

  for (let result of results) {
    if (result.status === "fulfilled") {
      console.log("Success");
    } else {
      console.log("Error:", result.reason.message);
    }
  }

  disconnect();
}

run();
