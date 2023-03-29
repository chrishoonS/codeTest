package com.testNetty;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.util.concurrent.DefaultThreadFactory;
import io.netty.util.concurrent.GlobalEventExecutor;

import java.net.InetSocketAddress;
/** 참고 : https://hbase.tistory.com/117
 * Netty Server 생성
 * EventLoopGroup 생성
 * ServerBootstrap 생성 및 설정
 * ChannelInitializer 생성
 * Server Start
 **/
public class EchoServer {
    private static final int SERVER_PORT = 11011;
    private final ChannelGroup allChannels = new DefaultChannelGroup("server", GlobalEventExecutor.INSTANCE);
    private EventLoopGroup bossEventLoopGroup;
    private EventLoopGroup workerEventLoopGroup;

    public void startServer() {
        /** EventLoopGroup 생성
         * NIO 기반의 EventLoop 생성
         * bossEventLoopGroup : Server socket listen 후, 여기서 만들어진 Channel에서 넘어온 데이터는 workerEventLoopGroup에서 처리
         **/
        bossEventLoopGroup = new NioEventLoopGroup(1, new DefaultThreadFactory("boss"));
        workerEventLoopGroup = new NioEventLoopGroup(1, new DefaultThreadFactory("worker"));

        /** ServerBootstrap 생성 및 설정
         * netty Server를 생성하기 위한 helper Class인 ServerBootstrap 인스턴스 생성
         * 만들어둔 EventLoopGroup을 bootstrap의 group() 메서드로 세팅
         * 채널 생성시, NIO Socket을 이용한 채널을 생성하도록 channel() 메서드에 NioServerSocketChannel.class를 인자로 넘겨줌
         * TCP 설정은 childOption()으로 설정, TCP_NODELAY, SO_KEEPALIVE 설정은 이 서버 소켓으로 연결되어 생성되는 Connection의 특성
         **/
        ServerBootstrap bootstrap = new ServerBootstrap();
        // Boss Thread는 ServerSocket을 Listen
        // Worker Thread는 만들어진 Channel에서 넘어온 이벤트를 처리
        bootstrap.group(bossEventLoopGroup, workerEventLoopGroup);
        //Channel 생성시 사용할 클래스(NIO 소켓을 이용한 채널)
        bootstrap.channel(NioServerSocketChannel.class);
        //accept 되어 생성되는 TCP Channel 설정
        bootstrap.childOption(ChannelOption.TCP_NODELAY, true);
        bootstrap.childOption(ChannelOption.SO_KEEPALIVE, true);
        //Client Request를 처리할 Handler 등록
        bootstrap.childHandler(new EchoServerInitializer());

        /** ChannelInitializer 생성
         * EchoServerInitializer 객체 할당
         * 서버 소켓 연결이 들어오면 이 객체가 호출되어 소켓 채널 초기화
         * bootstrap의 bind() 메서드로 서버 소켓에 포트를 바인딩
         * sync() 메서드를 호출해서 바인딩이 완료 될때까지 대기 후 서버 start
         **/
        try{
            //Channel 생성후 기다림
            ChannelFuture bindFuture = bootstrap.bind(new InetSocketAddress(SERVER_PORT)).sync();
            Channel channel = bindFuture.channel();
            allChannels.add(channel);

            //Channel이 닫힐 때까지 대기
            bindFuture.channel().closeFuture().sync();
        }catch(InterruptedException e){
            throw new RuntimeException();
        }finally {
            close();
        }
    }

    private void close() {
        allChannels.close().awaitUninterruptibly();
        workerEventLoopGroup.shutdownGracefully().awaitUninterruptibly();
        bossEventLoopGroup.shutdownGracefully().awaitUninterruptibly();
    }

}
