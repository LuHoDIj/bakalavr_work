<?php

namespace BakalavrBundle\Topic;

use JDare\ClankBundle\Event\ClientEvent;
use JDare\ClankBundle\Topic\TopicInterface;
use Ratchet\ConnectionInterface as Conn;

class VideoTopic implements TopicInterface
{
    /**
     * This will receive any Subscription requests for this topic.
     *
     * @param \Ratchet\ConnectionInterface $conn
     * @param $topic
     * @return void
     */
    public function onSubscribe(Conn $conn, $topic)
    {
        //this will broadcast the message to ALL subscribers of this topic.
        $topic->broadcast(['msg' => $conn->resourceId . " has joined " . $topic->getId()]);
    }

    /**
     * This will receive any UnSubscription requests for this topic.
     *
     * @param \Ratchet\ConnectionInterface $conn
     * @param $topic
     * @return void
     */
    public function onUnSubscribe(Conn $conn, $topic)
    {
        //this will broadcast the message to ALL subscribers of this topic.
        $topic->broadcast(['msg' => $conn->resourceId . " has left " . $topic->getId()]);
    }

    /**
     * This will receive any Publish requests for this topic.
     *
     * @param \Ratchet\ConnectionInterface $conn
     * @param $topic
     * @param ClientEvent $event
     * @param array $exclude
     * @param array $eligible
     * @return mixed|void
     */
    public function onPublish(Conn $conn, $topic, $event, array $exclude, array $eligible)
    {
        /*
        $topic->getId() will contain the FULL requested uri, so you can proceed based on that

        e.g.

        if ($topic->getId() == "acme/channel/shout")
            //shout something to all subs.
        */

        $stream = 'data:video/mp4;base64,' . base64_encode(file_get_contents(__DIR__ . '/../../../web/resources/swoop.mp4'));

        $topic->broadcast([
            "msg"    => "stream",
            "stream" => $stream,
        ]);
    }
}