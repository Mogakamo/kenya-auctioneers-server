import { enumType, extendType, objectType, queryType } from "nexus";
import { Role } from "@prisma/client";

export const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("username");
    t.nonNull.string("email");
    t.nonNull.string("role");
  },
});

export const userQuery = queryType({
  definition(t) {
    t.list.field("users", {
      type: "User",
      async resolve(_, __, context) {
        return await context.prisma.user.findMany();
      },
    });
  },
});
