const http = require("http");
const port = 3005;
const jsondata = [
    {
        name: "Dinesh1",
    },
    {
        name: "Dinesh",
    },
    {
        name: "Dinesh",
    },
    {
        name: "Dinesh",
    },
];
const cors = require("cors");
const app = http.createServer((req, res) => {
    if (req.url == "/Aboutus") {
        res.write("<html>");
        res.write("<body>");
        res.write("<h1> what is Node js </h1>");
        res.write(
            "<h2> Node js is a open source ,cross plateform,single thered ,javascript runtime enviormant .</h2>"
        );
        res.write("</body>");
        res.write("</html>");
        res.end();
    } else if (req.url === "/post") {
        res.write("<h1> Welcome Bhai But Go to Another Pages </h1>");
        res.end();
    } else if (req.url == "/Api" && req.method === "POST") {
        const data = JSON.stringify(jsondata);
        res.write(data);
        res.end();
    } else {
        res.write("<h1> Welcome This is Home page11</h1>");

        res.end();
    }
});

app.use(cors({
    origin: "*"

}))

app.listen(port, () => {
    console.log(`server is running in the port ${port}`);
});
console.log(jsondata);
