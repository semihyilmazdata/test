/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.MenuItemInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).menuItem.createMany(input as any))),

        create: procedure.input($Schema.MenuItemInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).menuItem.create(input as any))),

        deleteMany: procedure.input($Schema.MenuItemInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).menuItem.deleteMany(input as any))),

        delete: procedure.input($Schema.MenuItemInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).menuItem.delete(input as any))),

        findFirst: procedure.input($Schema.MenuItemInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).menuItem.findFirst(input as any))),

        findMany: procedure.input($Schema.MenuItemInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).menuItem.findMany(input as any))),

        findUnique: procedure.input($Schema.MenuItemInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).menuItem.findUnique(input as any))),

        updateMany: procedure.input($Schema.MenuItemInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).menuItem.updateMany(input as any))),

        update: procedure.input($Schema.MenuItemInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).menuItem.update(input as any))),

        count: procedure.input($Schema.MenuItemInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).menuItem.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MenuItemCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MenuItemCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MenuItemCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MenuItemCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MenuItemCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MenuItemCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MenuItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MenuItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MenuItemCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MenuItemCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MenuItemGetPayload<T>, Context>) => Promise<Prisma.MenuItemGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MenuItemDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MenuItemDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MenuItemDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MenuItemDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MenuItemDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MenuItemDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MenuItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MenuItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MenuItemDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MenuItemDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MenuItemGetPayload<T>, Context>) => Promise<Prisma.MenuItemGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MenuItemFindFirstArgs, TData = Prisma.MenuItemGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.MenuItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MenuItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MenuItemFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MenuItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MenuItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MenuItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MenuItemFindManyArgs, TData = Array<Prisma.MenuItemGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.MenuItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MenuItemGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MenuItemFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MenuItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MenuItemGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MenuItemGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MenuItemFindUniqueArgs, TData = Prisma.MenuItemGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MenuItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MenuItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MenuItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MenuItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MenuItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MenuItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MenuItemUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MenuItemUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MenuItemUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MenuItemUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MenuItemUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MenuItemUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MenuItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MenuItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MenuItemUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MenuItemUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MenuItemGetPayload<T>, Context>) => Promise<Prisma.MenuItemGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.MenuItemCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MenuItemCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.MenuItemCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MenuItemCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.MenuItemCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.MenuItemCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MenuItemCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MenuItemCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
