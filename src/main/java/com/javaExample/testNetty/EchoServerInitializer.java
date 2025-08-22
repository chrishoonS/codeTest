package com.javaExample.testNetty;

import io.netty.channel.*;
import io.netty.channel.socket.SocketChannel;
import io.netty.handler.codec.LineBasedFrameDecoder;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;

//서버측 채널 파이프라인을 구성하는 Initializer Class
public class EchoServerInitializer extends ChannelInitializer<SocketChannel> {
    @Override
    protected void initChannel(SocketChannel ch) throws Exception {
        ChannelPipeline pipeLine = ch.pipeline();

        pipeLine.addLast(new LineBasedFrameDecoder(65536));
        pipeLine.addLast(new StringDecoder());
        pipeLine.addLast(new StringEncoder());
        pipeLine.addLast(new EchoServerHandler());
    }
}
