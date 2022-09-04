import { enumType, extendType, objectType, queryType } from "nexus";
export const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.nonNull.string("username");
    t.nonNull.string("email");
    t.nonNull.field("role", { type: Role });
  },
});

const Role = enumType({
  name: "Role",
  members: ["ADMIN", "SUPER_ADMIN", "BIDDER", "SELLER"],
});

export const userQuery = queryType({
  definition(t) {
    t.nonNull.field("users", {
      type: "User",
      async resolve(parent, args, context) {
        return await context.prisma.user.findMany();
      },
    });
  },
});
