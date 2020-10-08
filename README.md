# React Module Federation Minimal Example

The code in this repository is based on:

- [Revolutionizing Micro Frontends with Webpack 5, Module Federation and Bit](https://blog.bitsrc.io/revolutionizing-micro-frontends-with-webpack-5-module-federation-and-bit-99ff81ceb0)
- [React Webpack 5 starter](https://github.com/carltonj2000/react-webpack5-starter)

The following setup were use to create this repository.

```bash
git clone git@github.com:carltonj2000/react-webpack5-starter.git
mv react-webpack5-starter app1
rm -rf app1/.git
cp -r app1 app2
# edit file to support module federation between app1 and app2
cd app1; npm i; npm start
cd app2; npm i; npm start
```
