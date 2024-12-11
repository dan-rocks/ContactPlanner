import type { Response } from "express";
import { TRPCError } from '@trpc/server';

export const sendErrorRes = (message: string, code: number) => {
    throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: code + " " + message
    })
}