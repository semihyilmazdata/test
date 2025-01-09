/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createRestaurantRouter from "./Restaurant.router";
import createMenuItemRouter from "./MenuItem.router";
import createCustomerInteractionRouter from "./CustomerInteraction.router";
import createShowcaseRouter from "./Showcase.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as RestaurantClientType } from "./Restaurant.router";
import { ClientType as MenuItemClientType } from "./MenuItem.router";
import { ClientType as CustomerInteractionClientType } from "./CustomerInteraction.router";
import { ClientType as ShowcaseClientType } from "./Showcase.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        restaurant: createRestaurantRouter(router, procedure),
        menuItem: createMenuItemRouter(router, procedure),
        customerInteraction: createCustomerInteractionRouter(router, procedure),
        showcase: createShowcaseRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    restaurant: RestaurantClientType<AppRouter>;
    menuItem: MenuItemClientType<AppRouter>;
    customerInteraction: CustomerInteractionClientType<AppRouter>;
    showcase: ShowcaseClientType<AppRouter>;
}
