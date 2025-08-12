import { Music, Video, Calendar, PenTool, ExternalLink, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ContentSections = () => {
  const musicNews = [
    {
      title: "Stray Kids Announces World Tour 2024",
      excerpt: "Get ready for the most epic performances across 30 cities worldwide!",
      date: "2 hours ago",
      category: "Stray Kids",
      theme: "stray-kids"
    },
    {
      title: "BLACKPINK's Rosé Drops Solo Teaser",
      excerpt: "New solo music coming this fall with a stunning visual concept.",
      date: "5 hours ago",
      category: "BLACKPINK",
      theme: "blackpink"
    },
    {
      title: "Behind the Scenes: Latest Music Video",
      excerpt: "Exclusive footage from the making of the newest collaboration.",
      date: "1 day ago",
      category: "General",
      theme: "general"
    }
  ];

  const videos = [
    {
      title: "MANIAC Dance Practice",
      duration: "3:42",
      views: "12M views",
      theme: "stray-kids"
    },
    {
      title: "Pink Venom Live Performance",
      duration: "4:15",
      views: "25M views", 
      theme: "blackpink"
    },
    {
      title: "Demon's Hunters Season 2 Trailer",
      duration: "2:28",
      views: "8M views",
      theme: "demon"
    }
  ];

  const tourDates = [
    {
      date: "Dec 15",
      city: "Seoul",
      venue: "Olympic Stadium",
      artist: "Stray Kids",
      status: "sold-out"
    },
    {
      date: "Dec 22",
      city: "Tokyo",
      venue: "Tokyo Dome",
      artist: "BLACKPINK",
      status: "available"
    },
    {
      date: "Jan 8",
      city: "Los Angeles",
      venue: "Crypto.com Arena",
      artist: "Stray Kids",
      status: "available"
    }
  ];

  const blogPosts = [
    {
      title: "Fashion Analysis: BLACKPINK's Latest Outfits",
      excerpt: "Breaking down the stunning looks from their recent appearances.",
      readTime: "5 min read",
      author: "StyleFan"
    },
    {
      title: "Stray Kids Lyrics Deep Dive",
      excerpt: "Understanding the powerful messages behind their latest album.",
      readTime: "8 min read",
      author: "LyricLover"
    },
    {
      title: "Demon's Hunters: Character Development Analysis",
      excerpt: "How our favorite characters have evolved throughout the series.",
      readTime: "6 min read",
      author: "SeriesFan"
    }
  ];

  return (
    <div className="py-16 space-y-24">
      {/* Latest News */}
      <section id="music" className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-glow-neon mb-4">
            Latest News
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with the freshest content from your favorites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {musicNews.map((news, index) => (
            <Card key={index} className="group hover:glow-neon transition-all duration-300 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className={news.theme === 'stray-kids' ? 'bg-stray-kids-red text-white' : news.theme === 'blackpink' ? 'bg-blackpink-pink text-white' : 'bg-neon-cyan text-background'}>
                    {news.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {news.date}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {news.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                <Button variant="outline" className="w-full neon-border">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-glow-blackpink mb-4">
            Featured Videos
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch the latest performances and exclusive content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="group hover:glow-blackpink transition-all duration-300 bg-card/80 backdrop-blur-sm border-border hover:border-blackpink-pink/50 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative aspect-video bg-gradient-to-br from-blackpink-pink/20 to-demon-dark/40 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30">
                    <Video className="w-8 h-8" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Badge variant="secondary" className="bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blackpink-pink transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">{video.views}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tour Dates */}
      <section id="tours" className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-glow-stray-kids mb-4">
            Upcoming Tours
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't miss out on live performances and events
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {tourDates.map((tour, index) => (
            <Card key={index} className="group hover:glow-stray-kids transition-all duration-300 bg-card/80 backdrop-blur-sm border-border hover:border-stray-kids-red/50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="font-orbitron font-bold text-xl text-stray-kids-red">
                        {tour.date}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-neon-cyan" />
                        {tour.city}
                      </h3>
                      <p className="text-muted-foreground">{tour.venue}</p>
                      <p className="text-sm text-primary font-medium">{tour.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge 
                      variant={tour.status === 'sold-out' ? 'destructive' : 'default'}
                      className={tour.status === 'available' ? 'bg-neon-green text-background' : ''}
                    >
                      {tour.status === 'sold-out' ? 'Sold Out' : 'Available'}
                    </Badge>
                    <Button 
                      variant={tour.status === 'sold-out' ? 'outline' : 'default'}
                      disabled={tour.status === 'sold-out'}
                      className={tour.status === 'available' ? 'bg-stray-kids-red hover:bg-stray-kids-red/80' : ''}
                    >
                      {tour.status === 'sold-out' ? 'Notify Me' : 'Get Tickets'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Fan Blog */}
      <section id="blog" className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-glow-demon mb-4">
            Fan Blog
          </h2>
          <p className="text-muted-foreground text-lg">
            Deep dives, analyses, and fan perspectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:glow-demon transition-all duration-300 bg-card/80 backdrop-blur-sm border-border hover:border-demon-red/50 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-demon-red transition-colors">
                  {post.title}
                </CardTitle>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>by {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="outline" className="w-full neon-border border-demon-red text-demon-red hover:bg-demon-red hover:text-white">
                  <PenTool className="w-4 h-4 mr-2" />
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentSections;