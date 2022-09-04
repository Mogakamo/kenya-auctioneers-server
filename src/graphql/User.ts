import { enumType, objectType } from "nexus";
export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.nonNull.field("role", {type: Role})
  },
});

const Role = enumType({
  name: "Role",
  members: ["ADMIN", "SUPERADMIN", "BIDDER", "SELLER"],
});
