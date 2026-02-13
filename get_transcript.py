#!/usr/bin/env python3
import json
from datetime import datetime

try:
    from youtube_transcript_api import YouTubeTranscriptApi
except ImportError:
    print("youtube-transcript-api is not installed")
    import sys
    sys.exit(1)

# 한경글로벌마켓 최신 영상
video_id = "3HK9e0S6WFc"
video_title = "[빈난새의 개장전요것만-2월13일] 올해 3번 인하 등장 | 트럼프 철강관세 축소 검토 | 갑자기 저승사자 된 AI | AMAT ANET 코인베이스 리비안 더치브로 릴리 비트마인"
video_url = f"https://www.youtube.com/watch?v={video_id}"

print(f'Processing: {video_title} ({video_id})')

try:
    # 자동생성 자막 시도
    transcript = YouTubeTranscriptApi.get_transcript(
        video_id,
        languages=['ko-KR', 'ko', 'auto-generated']
    )

    # 자막 텍스트로 변환
    transcript_text = '\n'.join([entry['text'] for entry in transcript])
    print(f'Transcript length: {len(transcript_text)} characters')

    # 결과 저장
    output_data = {
        'video_id': video_id,
        'title': video_title,
        'url': video_url,
        'transcript': transcript,
        'transcript_text': transcript_text,
        'transcript_length': len(transcript_text),
        'generated_at': datetime.now().isoformat()
    }

    # JSON 저장
    output_file = f'output/{video_id}_auto_captions.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f'✅ Saved: {output_file}')

except Exception as e:
    print(f'❌ Error: {str(e)}')
    import sys
    sys.exit(1)
