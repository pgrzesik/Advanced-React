const Query = {
  dogs(parent, args, ctx, info) {
    return [{name: "Doggo"}, {name: "Doggero"}];
  },
};

module.exports = Query;
