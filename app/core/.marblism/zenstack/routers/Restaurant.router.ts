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

        createMany: procedure.input($Schema.RestaurantInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).restaurant.createMany(input as any))),

        create: procedure.input($Schema.RestaurantInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).restaurant.create(input as any))),

        deleteMany: procedure.input($Schema.RestaurantInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).restaurant.deleteMany(input as any))),

        delete: procedure.input($Schema.RestaurantInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).restaurant.delete(input as any))),

        findFirst: procedure.input($Schema.RestaurantInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).restaurant.findFirst(input as any))),

        findMany: procedure.input($Schema.RestaurantInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).restaurant.findMany(input as any))),

        findUnique: procedure.input($Schema.RestaurantInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).restaurant.findUnique(input as any))),

        updateMany: procedure.input($Schema.RestaurantInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).restaurant.updateMany(input as any))),

        update: procedure.input($Schema.RestaurantInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).restaurant.update(input as any))),

        count: procedure.input($Schema.RestaurantInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).restaurant.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RestaurantCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RestaurantCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RestaurantCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RestaurantCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RestaurantCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RestaurantCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RestaurantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RestaurantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RestaurantCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RestaurantCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RestaurantGetPayload<T>, Context>) => Promise<Prisma.RestaurantGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RestaurantDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RestaurantDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RestaurantDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RestaurantDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RestaurantDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RestaurantDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RestaurantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RestaurantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RestaurantDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RestaurantDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RestaurantGetPayload<T>, Context>) => Promise<Prisma.RestaurantGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RestaurantFindFirstArgs, TData = Prisma.RestaurantGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.RestaurantFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RestaurantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RestaurantFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RestaurantFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RestaurantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RestaurantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RestaurantFindManyArgs, TData = Array<Prisma.RestaurantGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.RestaurantFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RestaurantGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RestaurantFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RestaurantFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RestaurantGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RestaurantGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RestaurantFindUniqueArgs, TData = Prisma.RestaurantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RestaurantFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RestaurantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RestaurantFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RestaurantFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RestaurantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RestaurantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RestaurantUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RestaurantUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RestaurantUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RestaurantUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RestaurantUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RestaurantUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RestaurantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RestaurantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RestaurantUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RestaurantUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RestaurantGetPayload<T>, Context>) => Promise<Prisma.RestaurantGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.RestaurantCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RestaurantCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.RestaurantCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RestaurantCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.RestaurantCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.RestaurantCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RestaurantCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RestaurantCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
