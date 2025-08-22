package com.javaExample.testNetty;

import io.netty.channel.*;

//client로부터 메시지를 받고 처리할 Handler Class
public class EchoServerHandler extends ChannelInboundHandlerAdapter {
    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg){
        String message = (String) msg;
        Channel channel = ctx.channel();
        channel.writeAndFlush("Response : '" + message + "'received\n");

        if("quit".equals(message))
            ctx.close();
    }
}
