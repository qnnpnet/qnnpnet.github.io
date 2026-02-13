#!/usr/bin/env python3
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound

video_id = "3HK9e0S6WFc"

print(f'Checking available transcripts for {video_id}...')

try:
    # 사용 가능한 자막 목록 가져오기
    transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)

    print(f'\nAvailable transcripts:')
    for transcript in transcript_list:
        print(f'  - Language: {transcript.language_code}, Type: {"Manual" if transcript.is_generated == False else "Auto-generated"}')

        # 자동생성된 자막이 있으면 가져오기 시도
        try:
            if transcript.is_generated:
                print(f'    Fetching auto-generated transcript...')
                data = transcript.fetch()
                print(f'    Length: {len(data)} entries')
            else:
                # 수동 자막도 가져와서 확인
                data = transcript.fetch()
                print(f'    Length: {len(data)} entries')
        except Exception as e:
            print(f'    Error fetching: {e}')

except TranscriptsDisabled:
    print('❌ Transcripts are disabled for this video')
except NoTranscriptFound:
    print('❌ No transcripts found for this video')
except Exception as e:
    print(f'❌ Error: {str(e)}')
